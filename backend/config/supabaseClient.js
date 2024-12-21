const dotenv = require('dotenv');
dotenv.config();  // This will load the variables from the .env file

const { createClient } = require('@supabase/supabase-js');
console.log(process.env.SUPABASE_URL);
console.log(process.env.SUPABASE_ANON_KEY);
console.log(process.env.SUPABASE_SERVICE_ROLE);


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  throw new Error('Supabase URL or keys are missing.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { headers: { 'Authorization': `Bearer ${supabaseServiceRoleKey}` } },
});

module.exports = supabase;
