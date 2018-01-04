export class Base {
  LastModified: number;
  content: string;
  selected: boolean;
  order: number;
}
export class HighBase {
  LastModified: number;
  content: [Base];
  where: string;
  when: string;// date - date format
  title: string;
  description: [string];
  // highlight: {
  //   exist: boolean,
  //   content: [string]
  // }
  selected: boolean;
  order: number;
}


/*
 * 0 = skill, 1= work history, 2=education, 3= projects
 * 4 = volunteer 5 = others
 * type: number;
 */


export class LowData {
  LastModified: number;
  content: [Base];
}

export class HighData {
  LastModified: number;
  content: [HighBase];
}

export class User {
  LastModified: number;
  name: string;
  content: [string];
  summary: string;
}


export class Requirements {
  content: [string];
}