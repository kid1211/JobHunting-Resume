import { Injectable } from '@angular/core';
import { HighData, LowData, User } from './base';
import { USER, SKILLS, WORKHISTROY, EDUCATION, PROJECTS, VOLUNTEER, OTHERS } from './mock-resume';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { templateJitUrl } from '@angular/compiler';

@Injectable()
export class HeroService {

  constructor() { }

  getUser(): Observable<User> {
    return of(USER);
  }

  getSkills(): Observable<LowData> {
    return of(SKILLS);
  }

  getWorkHistory(): Observable<HighData> {
    return of(WORKHISTROY);
  }

  getEducation(): Observable<HighData> {
    return of(EDUCATION);
  }

  getProjects(): Observable<HighData> {
    return of(PROJECTS);
  }

  getVolunteer(): Observable<LowData> {
    return of(VOLUNTEER);
  }

  getOthers(): Observable<LowData> {
    return of(OTHERS);
  }

  /**   index0= type
    * index1 = typeofData;
    * index2= [index]
    */
  /**
   * type[
   * skills,
   * workhistory,
   * education
   * projects
   * volunteer
   * others
   * user,
   * ]
   */
  /** userInfo:
   * index1:
   * null
   * index2:
   * [
   *  contentIndex
   * ]
   * 
   */
  /** lowData:
   * index1:
   *  null
   * index2:
   * [
   *  contentIndex
   * ]
   * 
   */
  /** highData:
   * index1:
   * [
   *  where,
   *  when,
   *  title,
   *  description,
   *  content
   * ] 
   * index2:
   * [
   *  highDataContent
   *  descriptionIndex,
   *  contentIndex
   * ]
   */
  setData(data, index0, index1, index2): Observable<null> {
    console.log(index0, index1, index2);
    switch (index0) {
      case 6://user data
        //userinfo
        switch (index1) {
          case 0:
            console.log("name: ", data);
            break;
          case 1:
            console.log("content " + index2[0] + ": ", data);
            break;
          case 2:
            console.log("summary: ", data);
            break;
          default:
            console.log("Data storage error, index1.");
            break;
        }
        break;
      case 0:
        console.log("skills -> content " + index2[0] + ": ", data);
        break;
      case 4:
        console.log("volunteer -> content " + index2[0] + ": ", data);
        break;
      case 5:
        console.log("others -> content " + index2[0] + ": ", data);
        break;

      case 1:
        let tempString = highDataAttr(index1, index2);
        // console.log("others -> content " + index2[0] + ": ", data);
        console.log("the " + index2[0] + " work history " + tempString + " :" + data);
        break;
      case 2: ;
        console.log("the " + index2[0] + "education " + tempString + " :" + data);
        break;
      case 3: ;
        console.log("the " + index2[0] + "projects " + tempString + " :" + data);
        break;
      default:
        console.log("Data storage error, type.");
        break;
    }

    return of();
  }

}

function highDataAttr(index1, index2) {
  let rtnString = "";
  switch (index1) {
    case 0:
      return "where ";
    case 1:
      return "when ";
    case 2:
      return "title ";
    case 3:
      //description
      return "description " + index2[1];
    case 4:
      //content
      return "description " + index2[2];
  }
}


/*
 * 0 = skill, 1= work history, 2=education, 3= projects
 * 4 = volunteer 5 = others
 * type: number;
 */
export enum ResumeType {

  "skill" = 0,
  "work_history" = 1,
  "education" = 2,
  "projects" = 3,
  "volunteer" = 4,
  "others" = 5,
  "user" = 6

}

/** type's data 
 *  6->0 name
 *  6->1 summary 
*/
