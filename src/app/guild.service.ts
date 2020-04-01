import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuildService {
  endpoint = environment.endpoint + '/guilds';

  private _guilds: any;
  get guilds() { return this._guilds; }

  private _publicGuilds: any;
  get publicGuilds() { return this._publicGuilds; }

  private get key() {
    return localStorage.getItem('key');
  }

  constructor(private http: HttpClient) {}  

  async updateGuilds() {
    this._guilds = (this.key) ? 
      await this.http.get(`${this.endpoint}?key=${this.key}`).toPromise() : null;
  }

  getGuild(id: string) {
    return this.guilds?.find(g => g.id === id);
  }

  getPublicGuild(id: string): Promise<any> {
    return this.http.get(`${this.endpoint}/${id}/public`).toPromise();
  }

  getMembers(guildId: string) {
    return this.http.get(`${this.endpoint}/${guildId}/members`).toPromise() as Promise<any[]>;
  }

  getSavedGuild(id: string): Promise<any> {
    return this.http.get(`${this.endpoint}/${id}/config?key=${this.key}`).toPromise();
  }

  async getChannels(id: string) {
    return [{
      id: '123',
      name: 'general',
      type: 'text'
    }];
  }

  async getRoles(id: string) {
    return [
    {
      name: 'Admin',
      color: '0F0F0F'
    },
    {
      name: 'Member',
      color: '000000'
    }];
  }
}
