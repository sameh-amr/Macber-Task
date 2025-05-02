export default abstract class IRepository<T> {
    abstract create(entity: Partial<T>): Promise<T>;
    abstract findAll(): Promise<T[]>;
    abstract findById(id: string): Promise<T | null>;
  }