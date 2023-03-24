import { createClient } from '@supabase/supabase-js'

export default async function GET(req, res) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  const { data, error } = await supabase
    .from('shareprice')
    .select('*')

  if (error) {
    return res.status(500).json({ message: error.message })
  }

  return res.status(200).json(data)
}
