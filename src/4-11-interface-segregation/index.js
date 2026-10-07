// 4-11. 인터페이스 분리 원칙, Interface Segregation Principle

// ❌ 쓰지 않는 메서드까지 갖춰야 하는 경우
class PushNotification {
  send(message) {
    console.log(`[푸시] ${message}`);
  }

  sendImage(imageUrl) {
    console.log(`[푸시] 이미지 ${imageUrl}`);
  }
}

class SmsNotification {
  send(message) {
    console.log(`[SMS] ${message}`);
  }

  // SMS는 이미지를 보낼 수 없지만 메서드를 맞추려고 만들었습니다
  sendImage(imageUrl) {
    console.log("[SMS] 이미지를 보낼 수 없습니다");
  }
}

// 이벤트 이미지를 알림 객체마다 보냅니다
function sendEventImage(notifiers, imageUrl) {
  notifiers.forEach((notifier) => {
    notifier.sendImage(imageUrl);
  });
}

const push = new PushNotification();
const sms = new SmsNotification();

sendEventImage([push, sms], "event.png");
// 출력:
// [푸시] 이미지 event.png
// [SMS] 이미지를 보낼 수 없습니다
