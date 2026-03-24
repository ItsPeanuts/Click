import { unlink, readdir, stat } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'

const UPLOAD_DIR = join(tmpdir(), 'docutools')
const MAX_AGE_MS = 24 * 60 * 60 * 1000

export async function cleanupOldFiles(): Promise<void> {
  try {
    const files = await readdir(UPLOAD_DIR)
    const now = Date.now()
    await Promise.allSettled(
      files.map(async (file) => {
        const filePath = join(UPLOAD_DIR, file)
        const stats = await stat(filePath)
        if (now - stats.mtimeMs > MAX_AGE_MS) {
          await unlink(filePath)
        }
      })
    )
  } catch {
    // Directory may not exist yet — ignore
  }
}

export { UPLOAD_DIR }
