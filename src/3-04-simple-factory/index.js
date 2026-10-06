// 3-04. 단순 팩토리 패턴, Simple Factory

// 각 알림 채널 클래스
class EmailNotification {
  send(message) {
    console.log(`[이메일] ${message}`);
  }
}

class SmsNotification {
  send(message) {
    console.log(`[SMS] ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`[푸시] ${message}`);
  }
}

// 단순 팩토리: 채널 이름을 받아 적절한 객체를 생성해 반환합니다
class NotificationFactory {
  // 채널에 대응하는 생성 함수를 객체로 관리합니다
  static #creators = {
    email: () => new EmailNotification(),
    sms: () => new SmsNotification(),
    push: () => new PushNotification(),
  };

  static create(channel) {
    // 1. 채널 이름으로 생성 함수를 찾습니다.
    const creator = NotificationFactory.#creators[channel];
    // 2. 등록되지 않은 채널이면 오류를 던집니다.
    if (!creator) {
      throw new Error(
        `지원하지 않는 채널입니다: ${channel}`,
      );
    }
    // 3. 찾은 생성 함수를 호출해 새 알림 객체를 반환합니다.
    return creator();
  }
}

// 알림을 보내는 함수
function sendOrderNotification(channel) {
  const notifier = NotificationFactory.create(channel);
  notifier.send("주문이 완료되었습니다.");
}

function sendShippingNotification(channel) {
  const notifier = NotificationFactory.create(channel);
  notifier.send("배송이 시작되었습니다.");
}

sendOrderNotification("email"); // 출력: [이메일] 주문이 완료되었습니다.
sendOrderNotification("sms"); // 출력: [SMS] 주문이 완료되었습니다.
sendShippingNotification("push"); // 출력: [푸시] 배송이 시작되었습니다.
