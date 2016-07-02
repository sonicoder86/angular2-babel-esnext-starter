import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

export const CORE_PROVIDERS = [LoggedInGuard, LoggedOutGuard];
