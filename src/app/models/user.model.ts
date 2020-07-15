import { FeaturePermission } from '../permission/models/feature-permission.model';

export class User {
  id: number;
  username: string;
  password: string;
  featurePermissions: FeaturePermission[];
}
