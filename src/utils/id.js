// Mirrors the frontend's own src/utils/id.js generator, so ids created by
// the backend look identical in shape to the ones the mock layer used to
// produce (e.g. "feat_1a2b3c4d_x9y8z7").
export function generateId(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
