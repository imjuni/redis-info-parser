export default interface IClientsInfo {
  connected_clients: number;
  client_longest_output_list: string;
  client_biggest_input_buf: string;
  blocked_clients: string;

  // Added information
  cluster_connections: number;
  maxclients: number;
  client_recent_max_input_buffer: number;
  client_recent_max_output_buffer: number;
  tracking_clients: number;
  clients_in_timeout_table: number;
}
