// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import { readFileSync } from 'fs';

const query = readFileSync(
  'sitecore/definitions/components/ContactInformation.sitecore.graphql',
  'utf8'
);
/**
 * Adds the ContactInformation component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'ContactInformation',
    icon: SitecoreIcon.DocumentTag,
    graphQLQuery: query,
    /*
    If the component implementation uses the 'Placeholder' component to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
