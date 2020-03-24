import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import config from 'config.json';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit {
  modules = config.modules;
  otherModules = config.otherModules;

  get guild() {
    const id = this.route.snapshot.paramMap.get('id');    
    return this.auth.getGuild(id);
  }

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
}
