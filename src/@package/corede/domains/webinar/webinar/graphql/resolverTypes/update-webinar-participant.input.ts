export interface IUpdateWebinarParticipantFilterInput {
  webinarId: string;
  participantId: string;
}

export interface IUpdateWebinarParticipantInput {
  name?: string;
  surname?: string;
  country?: string;
  city?: string;
  company?: string;
  joined?: boolean;
}
