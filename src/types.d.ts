type User =
  | {
      id: number;
      name: string;
      company: {
        name: string;
        catchPhrase: string;
        bs: string;
      };
    }
  | undefined;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
