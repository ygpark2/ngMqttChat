interface PluginModel {
  active: boolean;
  description: string;
  name: string;
  version: string;
}

export interface Plugin {
  Array<PluginModel>()
}