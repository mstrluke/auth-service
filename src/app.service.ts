import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'supabaseUrl';
const supabaseKey = 'supabaseKey';

@Injectable()
export class AuthService {
  private supabase = createClient(supabaseUrl, supabaseKey);

  async register(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return data;
  }

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return data;
  }

  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw new Error(error.message);
    return { success: true };
  }
}
