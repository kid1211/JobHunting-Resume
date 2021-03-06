import { Injectable } from '@angular/core';
import { HighData, LowData, User, Requirements } from './base';
import { REQUIREMENTS, USER, SKILLS, WORKHISTROY, EDUCATION, PROJECTS, VOLUNTEER, OTHERS } from './mock-resume';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { templateJitUrl } from '@angular/compiler';
import { isComponentView } from '@angular/core/src/view/util';


@Injectable()
export class HeroService {

  searched: Boolean;

  constructor() { }

  isSearched(isSearch): Boolean {
    if (isSearch == true || false) {
      this.searched = isSearch;
      return isSearch;
    }
    else {
      return this.searched;
    }
  }
  getRequirements(): Observable<Requirements> {
    return of(REQUIREMENTS);
  }
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



  reOrder(type, oldindex, newindex, highID): Observable<null> {
    // type, isContent, oldindex, newindex
    // console.log(type, isContent, oldindex, newindex);
    let temp;
    let isContent = highID.slice(0, 5) == 'good-';//either good- or baad-
    let highindex = highID.slice(5);//number index for which object
    console.log(highindex);
    switch (type) {
      case 0:
        //  USER.content
        temp = SKILLS.content;
        break;
      case 1:
        if (isContent) temp = WORKHISTROY.content[highindex].content;
        else temp = WORKHISTROY.content[highindex].description;
        break;
      case 2:
        if (isContent) temp = EDUCATION.content[highindex].content;
        else temp = EDUCATION.content[highindex].description;
        break;
      case 3:
        if (isContent) temp = PROJECTS.content[highindex].content;
        else temp = PROJECTS.content[highindex].description;
        break;
      case 4:
        temp = VOLUNTEER.content;
        break;
      case 5:
        temp = OTHERS.content;
        break;
      default:
        console.log('reorder is bad');
        break;
    }


    move(temp, oldindex, newindex);
    console.log(temp);
    return null;
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
   * [
   * name,
   * content,
   * summary
   * ]
   * 
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
    // console.log(index0, index1, index2);
    switch (index0) {
      case 6://user data
        //userinfo
        switch (index1) {
          case 0:
            console.log("name: ", data);
            // USER, SKILLS, WORKHISTROY, EDUCATION, PROJECTS, VOLUNTEER, OTHERS 
            USER.name = data;
            break;
          case 1:
            console.log("content " + index2[0] + ": ", data);
            USER.content[index2[0]] = data;
            break;
          case 2:
            console.log("summary: ", data);
            USER.summary = data;
            break;
          default:
            console.log("Data storage error, index1.");
            break;
        }
        break;
      case 0:
        console.log("skills -> content " + index2[0] + ": ", data);
        SKILLS.content[index2[0]].content = data;
        break;
      case 4:
        console.log("volunteer -> content " + index2[0] + ": ", data);
        VOLUNTEER.content[index2[0]].content = data;
        break;
      case 5:
        console.log("others -> content " + index2[0] + ": ", data);
        OTHERS.content[index2[0]].content = data;
        break;

      case 1:
        highDataAttr(WORKHISTROY, index1, index2, data);
        // console.log("others -> content " + index2[0] + ": ", data);
        break;
      case 2: ;
        highDataAttr(EDUCATION, index1, index2, data);

        break;
      case 3: ;
        highDataAttr(PROJECTS, index1, index2, data);
        break;
      default:
        console.log("Data storage error, type.");
        break;
    }

    return of();
  }

}

function highDataAttr(constData, index1, index2, data) {

  // console.log("the " + index2[0] + " work history " + tempString + " :" + data);
  // console.log("the " + index2[0] + "education " + tempString + " :" + data);
  // console.log("the " + index2[0] + "projects " + tempString + " :" + data);
  // let rtnString = "";

  // console.log(index1, index2, data);
  switch (index1) {
    case 0:
      // return "where ";
      // console.log(constData.content[index2[0]].where);
      constData.content[index2[0]].where = data;
      break;
    case 1:
      // return "when ";
      constData.content[index2[0]].when = data;
      break;
    case 2:
      // return "title ";
      constData.content[index2[0]].title = data;
      break;
    case 3:
      //description
      // return "description " + index2[1];

      constData.content[index2[0]].description[index2[1]] = data;
      break;
    case 4:
      //content
      // return "description " + index2[2];

      constData.content[index2[0]].content[index2[2]].content = data;
      break;
    default:
      console.log("something dumb happended");
      break;
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


function move(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
};