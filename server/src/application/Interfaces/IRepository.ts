export default abstract class IRepository<T> {
    abstract create(entity: Partial<T>): Promise<T>;
  }