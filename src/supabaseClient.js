import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lpsficfdlzbpnbdokygf.supabase.co'
const supabaseKey = 'sb_publishable_B8qKCFSrZrutxCVwuIT5mw_O0H7rQts'

export const supabase = createClient(supabaseUrl, supabaseKey)