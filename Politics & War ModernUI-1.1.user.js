// ==UserScript==
// @name        Politics & War Modern UI (Dark/Purple Theme)
// @namespace   yes
// @version     5.0 // Infobar Basic Background
// @description A highly modernized, card-based dark theme for Politics & War, with improved readability and consistency.
// @author      Monti
// @match       https://politicsandwar.com/*
// @grant       GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        :root {
            --color-bg-primary: #0d1117;
            --color-bg-card: #161b22;
            --color-bg-header: #21262d;
            --color-border: #30363d;
            --color-text-primary: #c9d1d9;
            --color-text-light: #f0f6fc;
            --color-text-muted: #8b949e;
            --color-accent-blue: #58a6ff;
            --color-accent-purple: #f0f6fc;
            --color-accent-green: #2eff7d;
            --color-accent-yellow: #ffd700;
            --color-zinc-200: #e4e4e7;
            --color-zinc-700: #3f3f46;
            --color-red-400: #f87171;
            --color-red-600: #dc2626;
            --color-emerald-400: #34d399;
            --color-emerald-600: #059669;
        }

        html, body {
            background-color: var(--color-bg-primary) !important;
            color: var(--color-text-primary) !important;
            font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif !important;
            min-height: 100vh;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box;
            line-height: 1.6;
        }

        #page-wrapper, #content-wrapper, .row[style*="padding-top:10px"],
        .tailwind, #tailwind-body, .col-sm-6, .col-xs-12, .col-md-10, .col-md-2,
        .container, .white-bg {
            background-color: transparent !important;
            color: inherit !important;
        }

        .container {
            max-width: 1280px !important;
            padding: 0 20px;
        }
        .row[style="padding-top:10px"] {
            padding-top: 30px !important;
        }

        .topnavigation {
            background: linear-gradient(to right, var(--color-bg-card), var(--color-bg-header)) !important;
            color: var(--color-text-light) !important;
            margin-bottom: 30px;
            border: none;
        }

.informationbar.col-xs-12 {
    background-color: var(--color-bg-header) !important;
    background-image: none !important;
    border-radius: 20px !important;
    border: 1px solid var(--color-border) !important;
    box-sizing: border-box;
    overflow: hidden;
}


        .topnavigation {
            border-radius: 0 0 12px 12px !important;
            border: 1px solid var(--color-border) !important;
            border-top: none !important;
            padding: 15px 0;
        }
        .topnavigation .navbar-nav > li > a {
            color: var(--color-text-primary) !important;
            padding: 12px 18px !important;
            font-size: 1.05em;
            border-radius: 8px;
        }
        .topnavigation .navbar-nav > li > a:hover,
        .topnavigation .navbar-nav > li > a:focus {
            background-color: rgba(var(--color-accent-blue), 0.15) !important;
            color: var(--color-accent-blue) !important;
        }

        .topnavigation .dropdown-menu, .informationbar .dropdown-menu {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 10px;
            overflow: hidden;
        }
        .topnavigation .dropdown-menu > li > a, .informationbar .dropdown-menu > li > a {
            color: var(--color-text-primary) !important;
            padding: 10px 20px;
        }
        .topnavigation .dropdown-menu > li > a:hover, .informationbar .dropdown-menu > li > a:hover {
            background-color: var(--color-bg-header) !important;
            color: var(--color-accent-blue) !important;
        }

        #leftcolumn {
            padding-right: 20px !important;
        }

        ul.sidebar {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 12px !important;
            padding: 10px 0 !important;
            margin-bottom: 25px !important;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            position: relative;
        }
        ul.sidebar::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border: 1px solid rgba(var(--color-accent-blue), 0.05);
            border-radius: 12px;
            pointer-events: none;
            z-index: 1;
        }

        ul.sidebar span[style*="font-weight:bold"],
        ul.sidebar span.bold {
            color: var(--color-accent-blue) !important;
            background: linear-gradient(to right, var(--color-bg-header), rgba(33,38,45,0)) !important;
            border-bottom: 1px solid var(--color-border) !important;
            font-size: 1.05em !important;
            font-weight: 700 !important;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 10px 20px !important;
            margin-bottom: 5px;
            display: block;
            cursor: default;
        }
        ul.sidebar span.bold:last-of-type {
            border-bottom: none;
        }

        ul.sidebar li {
            list-style: none !important;
            padding: 8px 20px !important;
            border-bottom: none !important;
            display: flex;
            align-items: center;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
            position: relative;
            overflow: hidden;
        }
        ul.sidebar li:last-child {
            border-bottom: none !important;
        }
        ul.sidebar li:hover {
            background-color: rgba(var(--color-accent-blue), 0.08) !important;
            cursor: pointer;
        }

        ul.sidebar a {
            color: var(--color-text-primary) !important;
            text-decoration: none !important;
            flex-grow: 1;
            font-weight: 400;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        ul.sidebar a:hover {
            color: var(--color-text-light) !important;
        }

        .sidebar span.no-translate,
        .sidebar b {
            color: var(--color-accent-purple) !important;
            font-weight: 600 !important;
        }

        .sidebar img[data-toggle="tooltip"] {
            filter: brightness(1.1);
            width: 16px !important;
            height: 16px !important;
            vertical-align: middle;
            flex-shrink: 0;
            opacity: 0.7;
            transition: opacity 0.2s ease-in-out;
        }
        ul.sidebar li:hover img[data-toggle="tooltip"] {
            opacity: 1;
        }
        ul.sidebar li:before {
            content: none !important;
        }

        #rightcolumn {
            padding-left: 25px !important;
        }
        .columnheader {
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            border-radius: 12px !important;
            padding: 18px 25px !important;
            margin-bottom: 25px !important;
            border: 1px solid var(--color-border) !important;
            text-align: center;
            font-size: 1.4em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .alert.alert-info, .hidden-xs.alert.alert-info {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 12px !important;
            color: var(--color-text-primary) !important;
            padding: 20px;
            margin-bottom: 25px;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .alert.alert-info p {
            text-align: center;
            margin: 5px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        .alert.alert-info p.bold {
            color: var(--color-accent-blue) !important;
            font-weight: 700 !important;
            font-size: 1.15em;
        }
        .alert.alert-info p a {
            color: var(--color-accent-blue) !important;
            text-decoration: none !important;
        }
        .alert.alert-info p a:hover {
            color: var(--color-accent-purple) !important;
            text-decoration: underline !important;
        }
        .alert.alert-info button.btn-ad-vote-header {
            background-color: var(--color-text-muted) !important;
            border: 1px solid var(--color-accent-blue) !important;
            color: var(--color-text-light) !important;
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 0.95em;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .alert.alert-info button.btn-ad-vote-header:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
        }
        .alert.alert-info button.btn-ad-vote-header i {
            color: inherit;
        }
        .alert.alert-info img.img-responsive {
            width: 100% !important;
            max-width: 100% !important;
            height: auto;
            border-radius: 10px !important;
            margin-top: 15px !important;
        }

        p.alert.alert-info.help,
        .uniqueidhelp
        {
            display: none !important;
        }


        .btn-group-justified {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .btn-group-justified .btn, .btn-group-justified .btn-default {
            flex-grow: 1;
            flex-basis: auto;
            min-width: 150px;
            padding: 12px 18px;
            font-size: 1.0em;
            text-align: center;
            border-radius: 8px;
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-light) !important;
            border: 1px solid var(--color-border) !important;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }

        .btn-group-justified .btn:hover,
        .btn-group-justified .btn-default:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
            border-color: var(--color-accent-blue) !important;
        }

        .btn-group-justified .btn img,
        .btn-group-justified .btn-default img {
            filter: brightness(1.1) invert(0);
            transition: filter 0.2s ease-in-out;
        }
        .btn-group-justified .btn:hover img,
        .btn-group-justified .btn-default:hover img {
            filter: brightness(0) invert(1) !important;
        }

        .btn-group-justified .btn img { margin-right: 8px; }
        .btn-group.btn-group-xs.visible-xs { margin-top: 15px; gap: 8px; }
        .btn-group.btn-group-xs.visible-xs .btn { padding: 10px 15px; font-size: 0.9em; }

        table.nationtable {
            background-color: var(--color-bg-card) !important;
            border-radius: 15px !important;
            border: 1px solid var(--color-border) !important;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: visible !important;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        table.nationtable th {
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            padding: 18px 25px !important;
            font-size: 1.25em !important;
            border-bottom: 2px solid var(--color-accent-blue) !important;
            border-radius: 12px 12px 0 0 !important;
            text-align: left !important;
            font-weight: 800 !important;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: sticky;
            top: 0;
            z-index: 1;
        }

        table.nationtable td {
            padding: 15px 25px !important;
            border-bottom: 1px solid rgba(var(--color-border), 0.5) !important;
            color: var(--color-text-primary) !important;
            vertical-align: middle;
        }

        table.nationtable tr:last-child td { border-bottom: none !important; }
        table.nationtable tbody tr:hover { background-color: var(--color-bg-header) !important; }
        table.nationtable .bold { color: var(--color-accent-blue) !important; font-weight: 700 !important; }
        table.nationtable img[style*="max-width:50px"] { border-radius: 8px !important; }
        table.nationtable td a { color: var(--color-accent-blue) !important; text-decoration: none !important; }
        table.nationtable td a:hover { color: var(--color-accent-purple) !important; text-decoration: underline !important; }
        table.nationtable td.notranslate { font-weight: 500; color: var(--color-text-light) !important; }

        table.nationtable tr.bold td {
            color: var(--color-accent-green) !important;
            font-weight: 800 !important;
            font-size: 1.1em;
            background-color: rgba(var(--color-accent-green), 0.05) !important;
        }
        table.nationtable tr.bold td:first-child { border-right: 1px solid rgba(var(--color-border), 0.5) !important; }

        table.nationtable th i.fa { margin-right: 10px; color: var(--color-accent-blue); font-size: 1.1em; }

        table.nationtable td .fa-info-circle { color: var(--color-text-muted) !important; margin-left: 5px; font-size: 0.9em; }
        table.nationtable td .fa-info-circle:hover { color: var(--color-accent-blue) !important; }

        table.nationtable button[onclick*="copy"] {
            background-color: var(--color-border) !important;
            border: 1px solid var(--color-accent-blue) !important;
            color: var(--color-text-light) !important;
            padding: 5px 10px;
            border-radius: 6px;
            font-size: 0.85em;
            cursor: pointer;
            margin-left: 10px;
        }
        table.nationtable button[onclick*="copy"]:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
        }

        .city-more-btn-container {
            padding: 15px 20px !important;
            text-align: center;
            background-color: var(--color-bg-header);
            border-top: 1px solid var(--color-border);
            border-radius: 0 0 12px 12px;
        }
        #showextracities {
            background-color: var(--color-text-muted) !important;
            border-color: var(--color-accent-blue) !important;
            color: var(--color-text-light) !important;
            padding: 8px 20px;
            border-radius: 8px;
            font-weight: 600;
        }
        #showextracities:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
        }

        p[style*="text-align:justify;"]#reply, #descCollapseDiv {
            background-color: var(--color-bg-card);
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0 !important;
            border: 1px solid var(--color-border) !important;
            line-height: 1.7;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        p[style*="text-align:justify;"]#reply .notranslate { color: var(--color-text-primary) !important; }
        #descCollapseDiv hr { border-top: 1px solid rgba(var(--color-border), 0.5) !important; margin: 20px 0; }
        #descCollapseDiv img { border-radius: 8px; max-width: 100%; height: auto; }

        .modal-content, .pw-modal-content {
            background-color: var(--color-bg-card) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 12px !important;
        }
        .modal-header, .pw-modal .flex.px-2.pb-2 {
            background-color: var(--color-bg-header) !important;
            border-bottom: 1px solid var(--color-border) !important;
            color: var(--color-text-light) !important;
            border-radius: 10px 10px 0 0 !important;
            padding: 15px 20px;
        }
        .modal-title, .pw-title-2xl {
            color: var(--color-text-light) !important;
            font-weight: 700;
            font-size: 1.5em;
        }
        .modal-footer {
            background-color: var(--color-bg-header) !important;
            border-top: 1px solid var(--color-border) !important;
            border-radius: 0 0 10px 10px !important;
            padding: 15px 20px;
        }
        .modal-body {
            background-color: var(--color-bg-card) !important;
            color: var(--color-text-primary) !important;
            padding: 20px;
        }
        .pw-btn-bg-on-hover {
            background-color: transparent !important;
            color: var(--color-text-primary) !important;
            border: none !important;
        }
        .pw-btn-bg-on-hover:hover {
            background-color: rgba(66,135,245,0.1) !important;
            color: var(--color-accent-blue) !important;
        }
        .pw-btn-bg-on-hover svg { stroke: var(--color-text-primary) !important; }
        .pw-btn-bg-on-hover:hover svg { stroke: var(--color-accent-blue) !important; }
        .pw-modal [data-tab] {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-bottom: none !important;
            border-radius: 8px 8px 0 0 !important;
            padding: 10px 15px !important;
            font-weight: 600;
        }
        .pw-modal [data-tab]:hover { background-color: var(--color-border) !important; color: var(--color-text-light) !important; }
        .pw-modal [data-tab].pw-active-tab {
            background-color: var(--color-bg-card) !important;
            color: var(--color-accent-blue) !important;
            border-color: var(--color-accent-blue) !important;
            border-bottom: 2px solid var(--color-accent-blue) !important;
            margin-bottom: -1px;
        }
        .pw-modal [data-tab-content] {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 0 0 8px 8px !important;
            padding: 20px !important;
        }
        .pw-alert-purple {
            background-color: #6a4c93 !important;
            color: #fff !important;
            border-color: #8c5cdb !important;
            border-radius: 8px;
            padding: 10px 15px;
            font-weight: 500;
        }
        .prose, .prose p, .prose li { color: var(--color-text-primary) !important; }
        .prose h3 { color: var(--color-accent-blue) !important; font-weight: 700; }
        .prose a { color: var(--color-accent-blue) !important; text-decoration: underline !important; }

        .panel-body .js-plotly-plot,
        .box > div > .js-plotly-plot,
        .panel > div > .js-plotly-plot { background-color: transparent !important; }
        div.panel, div.box {
            background-color: var(--color-bg-card) !important;
            border-radius: 15px !important;
            border: 1px solid var(--color-border) !important;
            margin-top: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        div.panel-body, div.box-body {
            padding: 25px !important;
            color: var(--color-text-primary) !important;
            background-color: transparent !important;
        }
        .js-plotly-plot {
            width: 100% !important;
            height: 300px !important;
            margin-top: 0px;
            margin-bottom: 0px;
        }
        .js-plotly-plot .plotly, .js-plotly-plot .main-svg {
            background: transparent !important;
            border-radius: 10px;
            overflow: hidden;
            border: none !important;
            width: 100% !important;
            height: 100% !important;
        }
        .js-plotly-plot .bglayer {
            fill: transparent !important;
        }
        .js-plotly-plot .legend .bg {
            fill: var(--color-bg-header) !important;
            stroke: var(--color-border) !important;
            border-radius: 5px;
        }
        .js-plotly-plot .xtick text, .js-plotly-plot .ytick text, .js-plotly-plot .legendtext {
            fill: var(--color-text-primary) !important;
            font-family: inherit !important;
            font-size: 11px !important;
        }
        .js-plotly-plot .xgrid, .js-plotly-plot .ygrid {
            stroke: rgba(var(--color-text-primary), 0.15) !important;
        }
        .js-plotly-plot .zerolinelayer path {
            stroke: var(--color-text-muted) !important;
            stroke-width: 1px !important;
        }
        .js-plotly-plot .lines path {
            filter: none;
            stroke-width: 2px !important;
        }
        .js-plotly-plot .fills path {
            filter: brightness(1.1) saturate(1.1);
        }
        .js-plotly-plot .modebar-container .modebar {
            background-color: rgba(var(--color-bg-header),0.8) !important;
            border: 1px solid rgba(var(--color-border),0.5);
            border-radius: 5px;
        }
        .js-plotly-plot .modebar-btn svg {
            fill: var(--color-text-primary) !important;
        }
        .js-plotly-plot .modebar-btn.active svg, .js-plotly-plot .modebar-btn:hover svg {
            fill: var(--color-accent-blue) !important;
        }
        .js-plotly-plot .modebar-btn[data-title="Produced with Plotly"] svg .cls-1 {
            fill: var(--color-bg-card) !important;
        }
        .js-plotly-plot .modebar-btn[data-title="Produced with Plotly"] svg .cls-2 {
            fill: var(--color-accent-blue) !important;
        }
        .js-plotly-plot .modebar-btn[data-title="Produced with Plotly"] svg .cls-3 {
            fill: var(--color-text-primary) !important;
        }

        #nation-map {
            width: 100% !important;
            height: 300px !important;
            border-radius: 10px !important;
            overflow: hidden !important;
            border: 1px solid var(--color-border) !important;
            margin-top: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        #nation-map .ol-viewport {
            background-color: transparent !important;
        }
        #nation-map .ol-control button {
            background-color: var(--color-border) !important;
            color: var(--color-text-primary) !important;
            border-radius: 6px;
        }
        #nation-map .ol-control button:hover {
            background-color: var(--color-text-muted) !important;
        }
        #nation-map canvas {
            background-color: #1a2a3a !important;
        }
        .ol-layer.ol-layer-vector canvas {
            filter: brightness(0.95) contrast(1.05);
        }
        .ol-layer:not(.ol-layer-vector) canvas {
            filter: brightness(0.8) saturate(1.05);
        }

        .pw-table {
            background-color: var(--color-bg-card) !important;
            border-radius: 15px !important;
            border: 1px solid var(--color-border) !important;
            margin-bottom: 25px !important;
            overflow: hidden;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .pw-table table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            color: var(--color-text-primary);
        }

        .pw-table th {
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            padding: 15px 20px !important;
            font-size: 1.1em !important;
            text-align: left;
            font-weight: 700 !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .pw-table tr:first-child th {
            border-radius: 12px 12px 0 0 !important;
            border-bottom: 2px solid var(--color-accent-blue) !important;
        }

        .pw-table td {
            padding: 12px 20px !important;
            border-bottom: 1px solid rgba(var(--color-border), 0.5) !important;
            vertical-align: middle;
        }
        .pw-table tbody tr:last-child td {
            border-bottom: none !important;
        }
        .pw-table tbody tr:hover {
            background-color: var(--color-bg-header) !important;
        }

        .pw-table-highlight-first tr td:first-child,
        .pw-table-bold-first tr td:first-child {
            font-weight: 600 !important;
            color: var(--color-text-light) !important;
        }
        .pw-table-text-zinc {
            color: var(--color-text-primary) !important;
        }
        .pw-table-alternate-main tbody tr:nth-child(even) {
            background-color: rgba(var(--color-bg-header), 0.3) !important;
        }
        .pw-table-alternate-main tbody tr:nth-child(odd) {
            background-color: transparent !important;
        }

        .pw-table tr.font-bold td {
            font-weight: 700 !important;
            color: var(--color-accent-blue) !important;
            background-color: rgba(var(--color-accent-blue), 0.1) !important;
            font-size: 1.05em;
        }
        .pw-table tr.font-bold td:first-child {
            color: var(--color-text-light) !important;
        }
        .pw-table tr.font-bold:last-of-type td {
            color: var(--color-accent-green) !important;
            background-color: rgba(var(--color-accent-green), 0.1) !important;
        }
        .pw-table tr.font-bold:last-of-type td:first-child {
            color: var(--color-text-light) !important;
        }

        .pw-table .text-right {
            text-align: right !important;
        }
        .pw-table .text-sm.italic {
            font-size: 0.85em !important;
            font-style: italic !important;
            color: var(--color-text-muted) !important;
        }
        .pw-table img[style*="height:16px"] {
            vertical-align: middle;
            margin-right: 5px;
        }

        .pw-table p.text-justify.text-sm {
            background-color: var(--color-bg-header);
            padding: 15px 20px;
            margin: 0 !important;
            border-top: 1px solid var(--color-border) !important;
            border-radius: 0 0 12px 12px;
            font-size: 0.9em !important;
            line-height: 1.5;
            color: var(--color-text-primary) !important;
            text-align: left !important;
        }
        .pw-table p.text-justify {
            text-align: left !important;
        }

        .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3 {
            background-color: transparent !important;
            padding: 15px !important;
        }

        .pw-card.p-0 {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        .pw-card h2.text-lg.font-bold {
            color: var(--color-text-light) !important;
        }

        .pw-card hr {
            border-top: 1px solid rgba(var(--color-border), 0.5) !important;
        }

        .pw-card table {
            color: var(--color-text-primary) !important;
        }
        .pw-card table td {
            color: var(--color-text-primary) !important;
            padding: 8px 0 !important;
            font-size: 0.95em !important;
        }
        .pw-card table img {
            filter: brightness(1.1);
            vertical-align: middle;
            margin-right: 5px;
            width: 16px !important;
            height: 16px !important;
        }

        .pw-card table td > div > div:last-child {
            color: var(--color-text-light) !important;
            font-weight: 600 !important;
        }

        .pw-card .w-full.h-5.bg-zinc-200,
        .pw-card .dark\\:bg-zinc-700 {
            background-color: var(--color-border) !important;
        }

        .pw-card .bg-red-400, .pw-card .dark\\:bg-red-600 {
            background-color: var(--color-red-600) !important;
        }
        .pw-card .bg-emerald-400, .pw-card .dark\\:bg-emerald-600 {
            background-color: var(--color-emerald-600) !important;
        }

        .pw-card .absolute.text-xs.font-bold.items-center.justify-center.flex.leading-none.px-2.h-full {
            color: var(--color-text-light) !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .pw-card .pw-title-xs {
            color: var(--color-text-primary) !important;
            font-weight: 600 !important;
        }

        .pw-card .pw-btn-text-white {
            color: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-red {
            background-color: var(--color-red-600) !important;
            border-color: var(--color-red-600) !important;
        }
        .pw-card .pw-btn-red:hover {
            background-color: var(--color-red-400) !important;
        }
        .pw-card .pw-btn-green {
            background-color: var(--color-emerald-600) !important;
            border-color: var(--color-emerald-600) !important;
        }
        .pw-card .pw-btn-green:hover {
            background-color: var(--color-emerald-400) !important;
        }
        .pw-card .pw-btn svg {
            stroke: currentColor !important;
            fill: none !important;
        }
        .pw-card .pw-btn-text-white svg {
            color: var(--color-text-light) !important;
            stroke: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-red svg {
            color: var(--color-text-light) !important;
            stroke: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-green svg {
            color: var(--color-text-light) !important;
            stroke: var(--color-text-light) !important;
        }

        .pw-card input[type="text"] {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 6px !important;
            padding: 8px 12px !important;
            font-size: 0.95em !important;
            width: auto !important;
        }
        .pw-card input[type="text"]::placeholder {
            color: var(--color-text-muted) !important;
        }

        #footer {
            background-color: var(--color-bg-card) !important;
            border-top: 1px solid var(--color-border) !important;
            padding: 40px 20px;
            margin-top: 40px;
            border-radius: 15px 15px 0 0;
            color: var(--color-text-primary);
            text-align: center;
        }
        #footer p, #footer a {
            color: var(--color-text-primary) !important;
            font-size: 0.95em;
            line-height: 1.8;
        }
        #footer a:hover {
            color: var(--color-accent-blue) !important;
            text-decoration: underline;
        }
        #footer .language_widget {
            margin-top: 20px;
        }
        #footer .language_widget p.bold {
            color: var(--color-accent-blue) !important;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        #footer select {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 0.9em;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23c9d1d9%22%20d%3D%22M287%2C114.3L146.2%2C255.1L5.4%2C114.3c-2.7-2.7-2.7-7.2%2C0-9.9s7.2-2.7%2C9.9%2C0l130.1%2C130.1l130.1-130.1c2.7-2.7%2C7.2-2.7%2C9.9%2C0S289.7%2C111.6%2C287%2C114.3z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 12px;
        }
        #footer select:focus {
            border-color: var(--color-accent-blue) !important;
            outline: none;
        }
        #footer .col-xs-12, #footer .col-md-4 {
            margin-bottom: 20px;
        }
        @media (min-width: 768px) {
            #footer .col-md-4 {
                margin-bottom: 0;
            }
        }

        .mobileLinkBar {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 0 0 12px 12px !important;
            padding: 10px 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .mobileLinkBar-fixed {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-top: none !important;
            border-radius: 0 0 12px 12px !important;
            padding: 8px 0;
        }
        .mobileLinkBarButton {
            color: var(--color-text-primary) !important;
            padding: 5px 0;
            font-size: 0.9em;
        }
        .mobileLinkBarButton:hover {
            color: var(--color-accent-blue) !important;
        }
        .mobileLinkBarButton i {
            color: var(--color-accent-blue) !important;
            font-size: 1.5em;
            margin-bottom: 5px;
        }
        .mobileMenuSmallText {
            font-size: 0.75em;
            font-weight: 500;
            color: var(--color-text-muted);
        }
        .mobileLinkBarButton:hover .mobileMenuSmallText {
            color: var(--color-text-light);
        }

        .logo img {
            margin: 25px auto 10px auto;
        }
        #header {
            margin-bottom: 0 !important;
        }

        .tooltip {
            z-index: 100000 !important;
            pointer-events: none !important;
        }
        .tooltip-inner {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-light) !important;
            border-radius: 8px !important;
            padding: 8px 12px !important;
            font-size: 0.9em !important;
            line-height: 1.4 !important;
            border: 1px solid var(--color-border) !important;
        }

        .tooltip.top .tooltip-arrow {
            border-top-color: var(--color-bg-header) !important;
        }
        .tooltip.top .tooltip-arrow:before {
            border-top-color: var(--color-border) !important;
        }

        .tooltip.right .tooltip-arrow {
            border-right-color: var(--color-bg-header) !important;
        }
        .tooltip.right .tooltip-arrow:before {
            border-right-color: var(--color-border) !important;
        }

        .tooltip.bottom .tooltip-arrow {
            border-bottom-color: var(--color-bg-header) !important;
        }
        .tooltip.bottom .tooltip-arrow:before {
            border-bottom-color: var(--color-border) !important;
        }

        .tooltip.left .tooltip-arrow {
            border-left-color: var(--color-bg-header) !important;
        }
        .tooltip.left .tooltip-arrow:before {
            border-left-color: var(--color-border) !important;
        }

        body > div,
        body > div > div,
        .row,
        [class*="col-"],
        .panel, .panel-body, .box, .box-body, .widget, .card, .pw-card,
        [id*="content"], [class*="content-"]
        {
            overflow: visible !important;
        }
    `);
})();
