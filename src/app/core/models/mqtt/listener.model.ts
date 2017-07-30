
interface ListenerModel {
  acceptors: number;
  current_clients: number;
  listen: string;
  max_clients: number;
  protocol: string;
  shutdown_count: Array<any>;
}

export interface Listener {
  Array<ListenerModel>()
}