import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PersonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Person {
  readonly id: string;
  readonly name?: string | null;
  readonly grade?: string | null;
  readonly treatment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Person, PersonMetaData>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person, PersonMetaData>) => MutableModel<Person, PersonMetaData> | void): Person;
}