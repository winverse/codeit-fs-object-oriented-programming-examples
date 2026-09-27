// 3-04. 단순 팩토리 패턴, Simple Factory

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

class NotificationFactory {
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
      throw new Error(`지원하지 않는 채널입니다: ${channel}`);
    }
    // 3. 찾은 생성 함수를 호출해 새 알림 객체를 반환합니다.
    return creator();
  }
}

const channels = ["email", "sms", "push"];

channels.forEach((channel) => {
  const notifier = NotificationFactory.create(channel);
  notifier.send("주문이 완료되었습니다.");
});

// 출력:
// [이메일] 주문이 완료되었습니다.
// [SMS] 주문이 완료되었습니다.
// [푸시] 주문이 완료되었습니다.
