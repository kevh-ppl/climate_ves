import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule, NgApexchartsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

  // Configuración base que puedes reutilizar en todos tus gráficos
  darkTheme: ApexOptions = {
    theme: {
      mode: 'dark' as const, // Fuerza el tema oscuro
    },
    chart: {
      type: 'area',
      foreColor: '#FFFFFF', // Color principal del texto (blanco)
      background: 'var(--mat-sys-surface)', // Fondo negro del área del gráfico
    },
    colors: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores de las series (personaliza según necesites)
    legend: {
      labels: {
        colors: '#FFFFFF' // Color del texto de la leyenda
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#FFFFFF' // Color de las etiquetas del eje X
        }
      },
      axisBorder: {
        color: '#FFFFFF' // Color de la línea del eje X
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF' // Color de las etiquetas del eje Y
        }
      }
    },
    tooltip: {
      theme: 'dark' // Tooltip con fondo oscuro
    }
  };

  // 1. Gráfico de barras - Emisiones por sector
  emisionesBarChart = {
    ...this.darkTheme,
    series: [{
      name: 'Emisiones de CO₂ (%)',
      data: [73.2, 5.2, 15.0, 10.5, 6.4, 3.2]
    }],
    chart: {
      ...this.darkTheme.chart,
      type: 'bar' as const,
      height: 350,
    },
    colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    xaxis: {
      categories: ['Energía', 'Industria', 'Transporte', 'Agricultura', 'Edificios', 'Otros'],
    },
  };

  // 2. Radar - Países contaminantes vs afectados
  contaminacionRadarChart = {
    ...this.darkTheme,
    series: [
      {
        name: 'Contaminantes',
        data: [29.2, 13.5, 7.0, 0.002, 0.03, 0.01]
      },
      {
        name: 'Afectados',
        data: [80, 60, 70, 95, 90, 88]
      }
    ],
    chart: {
      ...this.darkTheme.chart,
      type: 'radar' as const,
      height: 350
    },
    colors: ['#FF0000', '#0000FF'],
    xaxis: {
      categories: ['China', 'EE.UU.', 'India', 'Maldivas', 'Bangladesh', 'Honduras']
    }
  };

  // 3. Línea - Temperatura global
  temperaturaLineChart = {
    ...this.darkTheme,
    series: [{
      name: 'Temperatura Media Global (°C)',
      data: [0.0, 0.01, 0.2, 0.45, 0.65, 1.02, 1.2]
    }],
    chart: {
      ...this.darkTheme.chart,
      type: 'line' as const,
      height: 350,
      animations: { enabled: false }
    },
    colors: ['#FFA500'],
    stroke: {
      curve: 'smooth' as const, width: 3, lineCap: 'round' as const
    },
    xaxis: {
      categories: ['1880', '1900', '1950', '1980', '2000', '2020', '2023']
    }
  };

  // 4. Pie - Deuda ecológica
  deudaPieChart = {
    ...this.darkTheme,
    series: [75, 25],
    chart: {
      ...this.darkTheme.chart,
      type: 'pie' as const,
      height: 350
    },
    colors: ['#8e44ad', '#27ae60'],
    labels: ['Norte Global (75%)', 'Sur Global (25%)']
  };
}
