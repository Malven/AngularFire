export class Course {

  constructor(
    public $key: string,
    public description: string,
    public duration: string,
    public url: string,
    public tags: string,
    public pro: boolean,
    public longDescription: string,
    public courseId: string
  ){  }

  static fromJsonArray(array): Course[]{
    return array.map(Course.fromJson);
  }

  static fromJson({$key, description, duration, url, tags, pro, longDescription, courseId}): Course {
    return new Course(
      $key,
      description,
      duration,
      url,
      tags,
      pro,
      longDescription,
      courseId
    );
  }
}
