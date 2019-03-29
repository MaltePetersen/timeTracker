import {Moment} from 'moment';
import {User} from './User';
import {Company} from './Company';

export interface ITimeEntry {
  id?: number;
  beginn?: number;
  end?: number;
  user?: User;
  company?: Company;
  createdAt?: Moment;
  timeWorked?: number;
}

export class TimeEntry implements ITimeEntry {
  constructor(
    public id?: number,
    public beginn?: number,
    public end?: number,
    public user?: User,
    public company?: Company,
    public createdAt?: Moment,
    public timeWorked?: number

) {

  }
}
