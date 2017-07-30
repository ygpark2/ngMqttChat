import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { ApiService } from './api.service';
import { SettingsService } from './settings.service';

import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class MqttService {

  private path: string = '/api';
  private authenticationToken: string = '';

  constructor(private api: ApiService, private settingsService: SettingsService) {
    this.api.setApiUrl(this.settingsService.environment.mqttApiEndpoint);

    this.authenticationToken = btoa(this.settingsService.environment.username + ':' + this.settingsService.environment.password);
    console.log("auth => " + this.authenticationToken);
  }

  private getRequestOptions(authenticationToken: string) : RequestOptions {
    let headers = new Headers({ 
        'Authorization': 'Basic ' + authenticationToken,
        'Content-type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true'
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
    return this.api.getOpts(`${this.path}/clients`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/sessions
  getSessions() {
    const term = {curr_page: 1, page_size: 100};
    return this.api.get(`${this.path}/sessions`, term);
  }

  // /api/topics
  getTopics() {
    return this.api.getOpts(`${this.path}/topics`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/routes
  getRoutes() {
    return this.api.getOpts(`${this.path}/routes`, this.getRequestOptions(this.authenticationToken));
  }

  // /api/subscriptions
  getSubscriptions() {
    return this.api.getOpts(`${this.path}/subscriptions`, this.getRequestOptions(this.authenticationToken));
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
