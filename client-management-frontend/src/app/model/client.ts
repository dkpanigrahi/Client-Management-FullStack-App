export interface Client {
    id:number
    clientId: string;
    clientName: string;
    contactInfo: string;
    receivedDate: Date;
    inventoryReceived: string;
    reportedIssues: string;
    clientNotes: string;
    assignedTechnician: string;
    estimatedAmount: number;
    deadline: Date;
    status: string;
}
