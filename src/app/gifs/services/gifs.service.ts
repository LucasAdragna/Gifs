import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagHistory: string[] = [];
  constructor(private Http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs history');
  }
  private apiKey: string = '9ECFy78A5xpdxFF4JqtzzC4PaMoaTGMc';
  private endpoint: string = `https://api.giphy.com/v1/gifs`;

  get TagHistory() {
    return [...this._tagHistory];
  }

  private organizeTag(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((doTag) => doTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagHistory.length === 0) return;
    this.searchgTag(this._tagHistory[0]);
  }

  searchgTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeTag(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 12)
      .set('q', tag);
    this.Http.get<SearchResponse>(`${this.endpoint}/search?`, {
      params,
    }).subscribe((resp) => {
      this.gifsList = resp.data;
    });
  }
}
