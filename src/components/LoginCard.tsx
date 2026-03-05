import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email });
  };

  return (
    <Card className="w-full max-w-md border-0 shadow-xl" style={{ boxShadow: "var(--shadow-glow)" }}>
      <CardHeader className="space-y-4 pb-2 text-center">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <Lock className="h-7 w-7 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Bem-vindo de volta</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground">Senha</Label>
              <button type="button" className="text-xs font-medium text-primary hover:underline">
                Esqueceu a senha?
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" variant="gradient" size="lg" className="w-full h-12">
            Entrar
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <button type="button" className="font-medium text-primary hover:underline">
              Criar conta
            </button>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
