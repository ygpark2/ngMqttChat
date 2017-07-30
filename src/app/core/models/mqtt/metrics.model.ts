
export interface Metrics {
  'bytes/received': number;
  'bytes/sent': number;
  'messages/dropped': number;
  'messages/qos0/received': number;
  'messages/qos0/sent': number;
  'messages/qos1/received': number;
  'messages/qos1/sent': number;
  'messages/qos2/dropped': number;
  'messages/qos2/received': number;
  'messages/qos2/sent': number;
  'messages/received': number;
  'messages/retained': number;
  'messages/sent': number;
  'packets/connack': number;
  'packets/connect': number;
  'packets/disconnect': number;
  'packets/pingreq': number;
  'packets/pingresp': number;
  'packets/puback/missed': number;
  'packets/puback/received': number;
  'packets/puback/sent': number;
  'packets/pubcomp/missed': number;
  'packets/pubcomp/received': number;
  'packets/pubcomp/sent': number;
  'packets/publish/received': number;
  'packets/publish/sent': number;
  'packets/pubrec/missed': number;
  'packets/pubrec/received': number;
  'packets/pubrec/sent': number;
  'packets/pubrel/missed': number;
  'packets/pubrel/received': number;
  'packets/pubrel/sent': number;
  'packets/received': number;
  'packets/sent': number;
  'packets/suback': number;
  'packets/subscribe': number;
  'packets/unsuback': number;
  'packets/unsubscribe': number;

}