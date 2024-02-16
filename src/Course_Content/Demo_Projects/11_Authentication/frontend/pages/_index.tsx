// LAYOUTS
export { RootLayout } from './layouts/Root';
export { EventsLayout } from './layouts/Events';
// LOADERS
export { loader as eventsLoader } from './Events';
export { loader as eventDetailLoader } from './EventDetail';
// ACTIONS
export { action as authAction } from './Authentication';
export { action as logoutAction } from './Logout';
export { action as deleteEventAction } from './EventDetail';
export { action as newsletterAction } from './Newsletter';
// PAGES
export { AuthenticationPage } from './Authentication';
export { HomePage } from './Home';
export { ErrorPage } from './Error';
export { EventsPage } from './Events';
export { EventDetailPage } from './EventDetail';
export { NewEventPage } from './NewEvent';
export { EditEventPage } from './EditEvent';
export { NewsletterPage } from './Newsletter';
