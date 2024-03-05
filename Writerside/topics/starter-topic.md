# Codigo para annotaciones

## Regex

Buscar "[  ]".

```regex
\s?\[.*?\]\.?
```

## Cover portada

<code-block lang="html">
&lt;div class="cover"&gt;
  &lt;img src="../../img/" alt=""/&gt;
&lt;/div&gt;
</code-block>

## Tablas

<tabs>
<tab title="Estilo normal">
Para tablas con estilo normal, usar la siguiente class. Junto con un numerador automático de "Tabla X" dentro del título
de la tabla. (usar footer para Totales).

<code-block lang="html">
&lt;table class=&quot;normal&quot;&gt;
  &lt;caption&gt;
    &lt;div class=&quot;tabla&quot;&gt;
      Título
    &lt;/div&gt;
  &lt;/caption&gt;
  &lt;thead&gt;
  &lt;tr&gt;
    &lt;th&gt;&lt;/th&gt;
  &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
  &lt;tr&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</code-block>

</tab>
<tab title="Sin bordes">
<code-block lang="html">
&lt;table class=&quot;no-border&quot;&gt;
&lt;/table&gt;
</code-block>

</tab>
</tabs>

## Figuras

Insertar Figura y Footer. Junto con "Figura X" con un numerador automático.

<tabs>
<tab title="Figura">
<code-block lang="html">
&lt;div class=&quot;figura&quot;&gt;
  Título
&lt;/div&gt;
</code-block>

</tab>
<tab title="Footer">
<code-block lang="html">
&lt;footer class=&quot;footer&quot;&gt;
  Texto
&lt;/footer&gt;
</code-block>

</tab>
</tabs>

## Infoboxes

<tabs>
<tab title="Check">
<code-block lang="html">
&lt;table class=&quot;infobox check&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
<tab title="Remark">
<code-block lang="html">
&lt;table class=&quot;infobox remark&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
<tab title="Important">
<code-block lang="html">
&lt;table class=&quot;infobox check&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
</tabs>
