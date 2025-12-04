"use client";
import { useEffect, useRef } from "react";

export default function AngularDemoPage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    container.innerHTML = `
      <div id="ng-root" class="card">
        <h2 style="margin-top:0">AngularJS Demo Widget</h2>
        <p style="color: var(--muted)">Tiny widget to showcase Angular-style binding.</p>
        <div id="ng-app" ng-app="demo" ng-controller="MainCtrl as vm">
          <div>
            <label>Name</label>
            <input style="margin-left:8px;padding:6px;border-radius:8px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:white" type="text" ng-model="vm.name" placeholder="Type your name" />
          </div>
          <p style="margin-top:10px">Hello, <b>{{ vm.name || 'Developer' }}</b>!</p>
          <div>
            <span class="tag" ng-repeat="s in vm.skills">{{ s }}</span>
          </div>
        </div>
      </div>
    `;

    const ngScript = document.createElement("script");
    ngScript.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js";
    ngScript.async = true;

    const appScript = document.createElement("script");
    appScript.text = `
      (function(){
        var app = angular.module('demo', []);
        app.controller('MainCtrl', function(){
          this.name = '';
          this.skills = ['Angular', 'React', 'TypeScript'];
        });
        angular.element(function(){
          var el = document.getElementById('ng-app');
          angular.bootstrap(el, ['demo']);
        });
      })();
    `;

    ngScript.onload = () => {
      document.body.appendChild(appScript);
    };

    document.body.appendChild(ngScript);

    return () => {
      try { document.body.removeChild(ngScript); } catch {}
      try { document.body.removeChild(appScript); } catch {}
    };
  }, []);

  return (
    <main>
      <section className="card">
        <h1 style={{marginTop:0}}>Angular Demo</h1>
        <p style={{color:"var(--muted)"}}>
          Below is a lightweight AngularJS widget and an embedded modern Angular example via StackBlitz.
        </p>
        <div ref={mountRef} />
      </section>

      <section className="card" style={{marginTop:16}}>
        <h2 style={{marginTop:0}}>Modern Angular Example (Embedded)</h2>
        <p style={{color:"var(--muted)"}}>Interactive Angular 17 sample running in the browser sandbox.</p>
        <div style={{position:'relative',paddingTop:'56.25%'}}> 
          <iframe
            src="https://stackblitz.com/edit/angular-ivy-1rbqmn?embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1"
            style={{position:'absolute',inset:0,border:'0',width:'100%',height:'100%',borderRadius:12}}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </div>
      </section>
    </main>
  );
}
