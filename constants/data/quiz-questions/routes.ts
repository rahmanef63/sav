export type RouteParams = {
  id: string;
};

export const ROUTES = {
  HOME: '/',
  QUIZ: '/quiz',
  QUIZ_RESULTS: '/quiz/results',
  STYLES: '/styles',
  CONSULTATION: '/consultation',
  STYLE_DETAILS: (params: Pick<RouteParams, 'id'>) => {
    if (!params?.id) return '/styles'; // Fallback route
    return `/styles/${params.id}`;
  }
} as const;

// Derive types from the ROUTES object
export type RoutePaths = typeof ROUTES;
export type RouteKeys = keyof RoutePaths;