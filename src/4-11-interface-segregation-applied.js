// 4-11. 인터페이스 분리 원칙을 적용한 코드

// SMS 알림은 send(message)만 가집니다
class SmsNotification {
  send(message) {
    console.log(`[SMS] ${message}`);
  }
}

// 푸시 알림은 send(message)와 sendImage(imageUrl)를 가집니다
class PushNotification {
  send(message) {
    console.log(`[푸시] ${message}`);
  }

  sendImage(imageUrl) {
    console.log(`[푸시] 이미지 ${imageUrl}`);
  }
}

// 메시지 발송은 send(message)만 요구합니다
function sendOrderMessage(notifiers, message) {
  notifiers.forEach((notifier) => {
    notifier.send(message);
  });
}

// 이미지 발송은 sendImage(imageUrl)만 요구합니다
function sendEventImage(notifiers, imageUrl) {
  notifiers.forEach((notifier) => {
    notifier.sendImage(imageUrl);
  });
}

const push = new PushNotification();
const sms = new SmsNotification();

sendOrderMessage([push, sms], "주문이 완료되었습니다.");
// 출력:
// [푸시] 주문이 완료되었습니다.
// [SMS] 주문이 완료되었습니다.

sendEventImage([push], "event.png");
// 출력: [푸시] 이미지 event.png
