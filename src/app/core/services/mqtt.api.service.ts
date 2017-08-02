import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { ApiService } from './api.service';
import { SettingsService } from './settings.service';

import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class MqttApiService {

  private path: string = '/api';
  private authenticationToken: string = '';

  private curr_page: number = 1;
  private page_size: number = 100;

  constructor(private api: ApiService, private settingsService: SettingsService) {
    this.api.setApiUrl(this.settingsService.environment.mqttApiEndpoint);

    this.authenticationToken = btoa(this.settingsService.environment.username + ':' + this.settingsService.environment.password);
    console.log("auth => " + this.authenticationToken);
  }

  private getRequestOptions(authenticationToken: string) : RequestOptions {
    let headers = new Headers({ 
        'Content-type': 'application/json',
        'Accept': 'application/json',
      });
    return new RequestOptions({ headers: headers });
  }

  // /api/stats
  getStats() {
    return this.api.getOpts(`${this.path}/stats`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/nodes
  getNodes() {
    return this.api.getOpts(`${this.path}/nodes`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/metrics
  getMetrics() {
    return this.api.getOpts(`${this.path}/metrics`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/listeners
  getListeners() {
    return this.api.getOpts(`${this.path}/listeners`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/clients
  getClients() {
    const term = {curr_page: this.curr_page, page_size: this.page_size};
    return this.api.get(`${this.path}/clients`, term);
  }

  // /api/sessions
  getSessions() {
    const term = {curr_page: this.curr_page, page_size: this.page_size};
    return this.api.get(`${this.path}/sessions`, term);
  }

  // /api/topics
  getTopics() {
    return this.api.get(`${this.path}/topics`);
  }

  // /api/routes
  getRoutes() {
    const term = {curr_page: this.curr_page, page_size: this.page_size};
    return this.api.get(`${this.path}/routes`, term);
  }

  // /api/subscriptions
  getSubscriptions() {
    const term = {curr_page: this.curr_page, page_size: this.page_size};
    return this.api.get(`${this.path}/subscriptions`, term);
  }

  // /api/plugins
  getPlugins() {
    return this.api.getOpts(`${this.path}/plugins`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/users
  getUsers() {
    return this.api.getOpts(`${this.path}/users`, this.getRequestOptions(this.authenticationToken));
  }
}
