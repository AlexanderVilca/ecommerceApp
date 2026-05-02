import { createClient } from '@sanity/client';
import { ENV } from '../../config/env';

// Sanity configuration from environment variables

const projectId = ENV.SANITY_PROJECT_ID;
const dataset = ENV.SANITY_DATASET;
const apiVersion = ENV.SANITY_API_VERSION;
const token = ENV.SANITY_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to true if you want to use the CDN for faster responses (not recommended for authenticated requests)
});

// Helper function to build image URLs
export const urlFor = (source: any) => {
  if (!source?.asset?._ref) return '';
  const ref = source.asset._ref;
  const [_assetType, id, dimension, format] = ref.split('-');
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimension}.${format}`;
};
