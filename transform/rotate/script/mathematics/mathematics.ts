/**
 * 
 */
class Mathematics {
  /**
   * random
   * @param {number} min 
   * @param {number} max 
   */
  public static random(min: number, max: number){
    return Math.random() * (max - min) + min;
  }

  /**
   * PI
   */
  public static PI(){
    const PI = 3.141592653589793;
    return PI;
  }

  /**
   * PI * 2
   */
  public static PI2(){
    return this.PI() * 2;
  }

  /**
   * 角度からラジアンを求める
   * @param {number} degree - degree
   */
  public static degTorad(degree: number) {
    return (this.PI() / 180) * degree;
  }
}

export {Mathematics};