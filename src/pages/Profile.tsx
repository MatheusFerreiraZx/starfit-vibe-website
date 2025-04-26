
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';

interface Profile {
  username: string;
  full_name: string;
  avatar_url: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>({
    username: '',
    full_name: '',
    avatar_url: '',
  });

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/auth');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('username, full_name, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      if (data) setProfile(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabase) {
      toast({
        variant: "destructive",
        title: "Erro de configuração",
        description: "As variáveis de ambiente do Supabase não estão configuradas.",
      });
      return;
    }
    
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) throw new Error('Usuário não encontrado');

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          ...profile,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      toast({
        description: "Perfil atualizado com sucesso!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao atualizar perfil",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="starfit-container py-8">
          <p>Carregando...</p>
        </div>
      </Layout>
    );
  }

  if (!supabase) {
    return (
      <Layout>
        <div className="starfit-container py-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-600">
                <AlertCircle className="mr-2" /> 
                Configuração Necessária
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As variáveis de ambiente do Supabase não estão configuradas.
                Por favor, adicione as variáveis <code className="bg-gray-100 p-1 rounded">VITE_SUPABASE_URL</code> e <code className="bg-gray-100 p-1 rounded">VITE_SUPABASE_ANON_KEY</code> nas configurações do projeto.
              </p>
              <p>
                Você pode encontrar estas informações no dashboard do Supabase, em Configurações do Projeto &gt; API.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="starfit-container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Meu Perfil</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={updateProfile} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome de Usuário</label>
                <Input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome Completo</label>
                <Input
                  type="text"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
