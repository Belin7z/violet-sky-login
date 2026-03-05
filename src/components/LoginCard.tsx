import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Lock, User, Mail, CheckCircle2, XCircle } from "lucide-react";

const PASSWORD_RULES = [
  { label: "Pelo menos 8 caracteres", test: (p: string) => p.length >= 8 },
  { label: "Letra maiúscula", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Letra minúscula", test: (p: string) => /[a-z]/.test(p) },
  { label: "Número", test: (p: string) => /[0-9]/.test(p) },
  { label: "Caractere especial (!@#$...)", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export function LoginCard() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const allRulesPass = PASSWORD_RULES.every((r) => r.test(password));
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "register") {
      if (!allRulesPass) {
        setRegisterError("A senha não atende todos os requisitos.");
        return;
      }
      if (!passwordsMatch) {
        setRegisterError("As senhas não coincidem.");
        return;
      }
      setRegisterError("");
      console.log("Register:", { username, email });
    } else {
      console.log("Login:", { username });
    }
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setPassword("");
    setConfirmPassword("");
    setRegisterError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
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
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {mode === "login" ? "Bem-vindo de volta" : "Criar sua conta"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "login"
              ? "Entre com suas credenciais para acessar sua conta"
              : "Preencha os dados abaixo para se registrar"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Usuário */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground">Usuário</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="username"
                type="text"
                placeholder="seu usuário"
                className="pl-10"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email - somente no registro */}
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Senha */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground">Senha</Label>
              {mode === "login" && (
                <button type="button" className="text-xs font-medium text-primary hover:underline">
                  Esqueceu a senha?
                </button>
              )}
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

          {/* Confirmar Senha + regras - somente no registro */}
          {mode === "register" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">Confirmar Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {confirmPassword.length > 0 && !passwordsMatch && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <XCircle className="h-3 w-3" /> As senhas não coincidem
                  </p>
                )}
              </div>

              {/* Regras da senha */}
              <div className="space-y-1.5 rounded-lg bg-muted/50 p-3">
                <p className="text-xs font-medium text-muted-foreground mb-2">Requisitos da senha:</p>
                {PASSWORD_RULES.map((rule) => {
                  const passes = rule.test(password);
                  return (
                    <div key={rule.label} className="flex items-center gap-2 text-xs">
                      {passes ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      ) : (
                        <XCircle className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />
                      )}
                      <span className={passes ? "text-foreground" : "text-muted-foreground"}>
                        {rule.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {registerError && (
                <p className="text-sm text-destructive text-center">{registerError}</p>
              )}
            </>
          )}

          {/* Lembrar conta - somente no login */}
          {mode === "login" && (
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground cursor-pointer select-none">
                Lembrar minha conta
              </Label>
            </div>
          )}

          <Button type="submit" variant="gradient" size="lg" className="w-full h-12">
            {mode === "login" ? "Entrar" : "Criar conta"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            {mode === "login" ? "Não tem uma conta? " : "Já tem uma conta? "}
            <button type="button" onClick={switchMode} className="font-medium text-primary hover:underline">
              {mode === "login" ? "Criar conta" : "Entrar"}
            </button>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
