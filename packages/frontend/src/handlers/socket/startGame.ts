import { EmitData } from "../../../../../types";

export const onStartGame = (
  socket: SocketIOClient.Socket,
  fn: (x: EmitData) => void
) => {
  const action = "START_GAME";
  socket.on(action, (data: EmitData) => {
    fn(data);
  });
  return (code: string) => {
    socket.emit(action, { code });
  };
};
