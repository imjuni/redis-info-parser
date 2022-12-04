import IClientsInfo from '@info/interfaces/IClientsInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getClientsInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.CLIENTS];

  const clientsInfo: IClientsInfo = {
    connected_clients: Number.parseInt(section.connected_clients, 10),
    client_longest_output_list: section.client_longest_output_list,
    client_biggest_input_buf: section.client_biggest_input_buf,
    blocked_clients: section.blocked_clients,

    cluster_connections: Number.parseInt(section.cluster_connections, 10),
    maxclients: Number.parseInt(section.maxclients, 10),
    client_recent_max_input_buffer: Number.parseInt(section.client_recent_max_input_buffer, 10),
    client_recent_max_output_buffer: Number.parseInt(section.client_recent_max_output_buffer, 10),
    tracking_clients: Number.parseInt(section.tracking_clients, 10),
    clients_in_timeout_table: Number.parseInt(section.clients_in_timeout_table, 10),
  };

  return clientsInfo;
}
