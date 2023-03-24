import supabase from "../../../utils/supabase"

export default async function Posts(){
    const { data } = await supabase.from('shareprice').select()
    return <p>{JSON.stringify(data)}</p>
}