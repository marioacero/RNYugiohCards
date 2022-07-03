interface ApiMethods {
  fetchCards: () => Promise<any>;
  searchCard(text: string): Promise<any>;
}

export default ApiMethods;
