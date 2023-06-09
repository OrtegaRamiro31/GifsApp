import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchResponse } from '../interfaces/gifts.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GiftService {
  public giftList: Gift[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = environment.API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.giftList = resp.data;
      });
  }

  public deleteSearchTag(tag: string): void {
    if (!localStorage.getItem('history')) return;
    const storedData = localStorage.getItem('history');
    const tags: string[] = storedData ? JSON.parse(storedData) : [];
    const newTags: string[] = tags.filter((tagsStored) => tagsStored !== tag);
    this._tagsHistory = newTags;
    this.saveLocalStorage();

    // console.log(prueba);
    // localStorage.removeItem(tag);
  }
}
