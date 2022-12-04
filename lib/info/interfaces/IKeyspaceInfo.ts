export default interface IKeyspaceInfo {
  keys: number;
  expires: number;
  avg_ttl?: number;
  reserved: boolean;
}
