class Reseller {
  hasUpdatedRecord: boolean;
  hasOrderCycle: boolean;
  hasContactCycle: boolean;
  hasLowScore: boolean;
  hasDebt: boolean;
  hasNoNegotiation: boolean;

  constructor(readonly name: string) {}

  isActive() {
    return this.hasContactCycle && this.hasOrderCycle && this.hasUpdatedRecord;
  }

  isBlocked() {
    return this.hasDebt && this.hasNoNegotiation && this.hasLowScore;
  }
}

enum ResellerStatus {
  hasUpdatedRecord = 1,
  hasOrderCycle = 2,
  hasContactCycle = 4,
  hasLowScore = 8,
  hasDebt = 16,
  hasNoNegotiation = 32,

  // isActive = 000 111 = 7
  isActive = ResellerStatus.hasUpdatedRecord |
    ResellerStatus.hasOrderCycle |
    ResellerStatus.hasContactCycle,

  // isBlocked = 111 000 = 56
  isBlocked = ResellerStatus.hasLowScore |
    ResellerStatus.hasDebt |
    ResellerStatus.hasNoNegotiation,
}

class ResellerBitwise {
  status: ResellerStatus;

  constructor(readonly name: string) {}

  isActive() {
    // se conjunto de bits isActive pertence ao status -> então é ativa
    return (this.status & ResellerStatus.isActive) === ResellerStatus.isActive;
  }

  isBlocked() {
    // se conjunto de bits isBlocked pertence ao status -> então é bloqueada
    return (
      (this.status & ResellerStatus.isBlocked) === ResellerStatus.isBlocked
    );
  }
}
