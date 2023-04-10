export default interface AuthContextEntity {
  notification: boolean;
  setNotification: (notification: boolean) => void;
  auth: boolean;
  setAuth: (notification: boolean) => void;
  modal: boolean;
  setModal: (modal: boolean) => void;
}
