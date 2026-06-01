import { useEffect, useRef } from 'react';

const WORDS = [
  "Kubernetes", "Docker", "Terraform", "AWS", "GCP", "Azure", 
  "Linux", "Ansible", "Go", "Rust", "Python", "TypeScript", 
  "React", "Node.js", "GraphQL", "gRPC", "PostgreSQL", "Redis", 
  "Kafka", "Elasticsearch", "Prometheus", "Grafana", "CI/CD", 
  "GitOps", "ArgoCD", "Istio", "Envoy", "Nginx", "Bash", 
  "Microservices", "Serverless", "IaC", "Pulumi", "Helm",
  "Cloud Native", "VPC", "Vault", "SRE"
];

export function LightspeedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let cx = w / 2;
    let cy = h / 2;

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
    };
    window.addEventListener('resize', onResize);

    class StarText {
      x: number;
      y: number;
      z: number;
      pz: number;
      word: string;

      constructor() {
        this.x = (Math.random() - 0.5) * w * 3;
        this.y = (Math.random() - 0.5) * h * 3;
        this.z = Math.random() * w;
        this.pz = this.z;
        this.word = WORDS[Math.floor(Math.random() * WORDS.length)];
      }

      update(speed: number) {
        this.pz = this.z;
        this.z -= speed;
        // As z goes to 0 it flies past camera
        if (this.z < 1) {
          this.z = w;
          this.x = (Math.random() - 0.5) * w * 3;
          this.y = (Math.random() - 0.5) * h * 3;
          this.pz = this.z;
          this.word = WORDS[Math.floor(Math.random() * WORDS.length)];
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        let x = cx + (this.x / this.z) * w;
        let y = cy + (this.y / this.z) * w;
        let px = cx + (this.x / this.pz) * w;
        let py = cy + (this.y / this.pz) * w;

        // Base scale limits so things aren't infinite
        let scale = Math.min(25, w / this.z);
        let depthRatio = 1 - this.z / w;
        
        let alpha = 0;
        if (depthRatio < 0.2) {
          alpha = depthRatio * 5; // fade in gradually
        } else if (this.z < 100) {
          // reaching light speed close to camera -> fade out like star wars
          alpha = Math.max(0, this.z / 100); 
        } else {
          alpha = 1;
        }

        // Draw the lightspeed stretch (motion line) when fast / close to camera
        let distanceMoved = Math.sqrt(Math.pow(x - px, 2) + Math.pow(y - py, 2));
        if (distanceMoved > 5 && this.z < 600) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.lineWidth = scale * 0.4;
          ctx.strokeStyle = `rgba(100, 180, 255, ${alpha * 0.4})`;
          ctx.stroke();
        }

        // Only draw text if alpha > 0
        if (alpha > 0.05) {
          ctx.font = `600 ${Math.max(1, 10 * scale)}px "JetBrains Mono", monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowBlur = 8 * scale;
          ctx.shadowColor = `rgba(150, 200, 255, ${alpha * 0.6})`;
          ctx.fillStyle = `rgba(240, 248, 255, ${alpha})`;
          ctx.fillText(this.word, x, y);
          ctx.shadowBlur = 0; 
        }
      }
    }

    const stars: StarText[] = Array.from({ length: 90 }, () => new StarText());
    
    let targetSpeed = 4;
    let currentSpeed = 4;
    let lightspeedTimer = 0;
    let isLightspeed = false;
    let animationFrameId: number;

    const loop = () => {
      ctx.fillStyle = isLightspeed ? 'rgba(2, 6, 23, 0.2)' : 'rgba(2, 6, 23, 0.4)';
      ctx.fillRect(0, 0, w, h);

      lightspeedTimer++;
      if (lightspeedTimer > 400) {
        isLightspeed = !isLightspeed;
        lightspeedTimer = isLightspeed ? 250 : 0; 
        targetSpeed = isLightspeed ? 50 : 4;
      }
      
      currentSpeed += (targetSpeed - currentSpeed) * 0.03;

      stars.forEach(star => {
        star.update(currentSpeed);
        star.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#020617' }}
      aria-hidden="true"
    />
  );
}
